import { whopSdk } from "@/lib/whop-sdk";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
	try {
		const headersList = await headers();
		const url = new URL(request.url);
		const experienceId = url.searchParams.get('experienceId');
		
		if (!experienceId) {
			return Response.json({ error: "Missing experienceId parameter" }, { status: 400 });
		}

		// Get user info
		const { userId } = await whopSdk.verifyUserToken(headersList);
		const user = await whopSdk.users.getUser({ userId });

		// Check access
		const accessResult = await whopSdk.access.checkIfUserHasAccessToExperience({
			userId,
			experienceId,
		});

		// Get experience info
		const experience = await whopSdk.experiences.getExperience({ experienceId });

		return Response.json({
			success: true,
			debug: {
				userId,
				user: {
					name: user.name,
					username: user.username,
				},
				experienceId,
				experience: {
					name: experience.name,
					id: experience.id,
				},
				access: accessResult,
				timestamp: new Date().toISOString(),
			}
		});
	} catch (error) {
		console.error("Debug API error:", error);
		return Response.json({
			success: false,
			error: error instanceof Error ? error.message : String(error),
			timestamp: new Date().toISOString(),
		}, { status: 500 });
	}
}
