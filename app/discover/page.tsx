export default function DiscoverPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="max-w-4xl mx-auto px-4 py-16">
				{/* Title */}
				<h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
					Test App for Whop
				</h1>
				
				{/* Main Description Card */}
				<div className="bg-white rounded-xl p-8 shadow-lg text-center mb-16">
					<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
						Welcome to our test application built with Next.js and Whop SDK.
					</p>
					<p className="text-base text-gray-500 max-w-2xl mx-auto mb-2">
						This is a development and testing environment to demonstrate Whop app integration, 
						user authentication, and experience management.
					</p>
					<p className="text-sm text-gray-400 max-w-2xl mx-auto">
						🚀 <strong>Status:</strong> Development Mode - Testing Whop API integration
					</p>
				</div>

				{/* Features Section */}
				<div className="grid md:grid-cols-2 gap-6 mb-10">
					<div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-2">
						<h3 className="font-semibold text-gray-900">
							User Authentication
						</h3>
						<p className="text-sm text-gray-600">
							Secure user token verification and user data retrieval through Whop SDK.
						</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-2">
						<h3 className="font-semibold text-gray-900">
							Access Control
						</h3>
						<p className="text-sm text-gray-600">
							Check user permissions and access levels for experiences and companies.
						</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-2">
						<h3 className="font-semibold text-gray-900">
							Experience Management
						</h3>
						<p className="text-sm text-gray-600">
							View and manage user access to specific experiences within your community.
						</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-2">
						<h3 className="font-semibold text-gray-900">
							Webhook Integration
						</h3>
						<p className="text-sm text-gray-600">
							Handle payment events and other webhook notifications from Whop platform.
						</p>
					</div>
				</div>

				<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
					Development Features
				</h2>

				{/* Development Info Cards */}
				<div className="grid md:grid-cols-2 gap-6">
					{/* Development Card 1 */}
					<div className="bg-white rounded-xl p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
							<h3 className="font-semibold text-gray-900">Live Development</h3>
						</div>
						<p className="text-sm text-gray-600 mb-3">
							Running on localhost:3001 with hot reload and Turbopack for fast development.
						</p>
						<div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
							<code>pnpm dev</code> - Development server
						</div>
					</div>

					{/* Development Card 2 */}
					<div className="bg-white rounded-xl p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
							<h3 className="font-semibold text-gray-900">Whop Integration</h3>
						</div>
						<p className="text-sm text-gray-600 mb-3">
							Full integration with Whop SDK for user management, access control, and webhooks.
						</p>
						<div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
							<code>@whop/api</code> - Server SDK
						</div>
					</div>

					{/* Development Card 3 */}
					<div className="bg-white rounded-xl p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
							<h3 className="font-semibold text-gray-900">Modern Stack</h3>
						</div>
						<p className="text-sm text-gray-600 mb-3">
							Built with Next.js 15, React 19, TypeScript, and Tailwind CSS for modern development.
						</p>
						<div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
							<code>Next.js + TypeScript</code> - Full-stack framework
						</div>
					</div>

					{/* Development Card 4 */}
					<div className="bg-white rounded-xl p-6 shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
							<h3 className="font-semibold text-gray-900">Error Handling</h3>
						</div>
						<p className="text-sm text-gray-600 mb-3">
							Comprehensive error handling and debugging tools for development and testing.
						</p>
						<div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
							<code>/api/debug</code> - Debug endpoint
						</div>
					</div>
				</div>

				{/* Technical Details */}
				<div className="mt-16 bg-gray-900 rounded-xl p-8 text-white">
					<h3 className="text-2xl font-bold mb-6 text-center">Technical Stack</h3>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="text-3xl mb-2">⚛️</div>
							<h4 className="font-semibold mb-2">Frontend</h4>
							<p className="text-sm text-gray-300">Next.js 15, React 19, TypeScript</p>
						</div>
						<div className="text-center">
							<div className="text-3xl mb-2">🎨</div>
							<h4 className="font-semibold mb-2">Styling</h4>
							<p className="text-sm text-gray-300">Tailwind CSS, Custom Components</p>
						</div>
						<div className="text-center">
							<div className="text-3xl mb-2">🔌</div>
							<h4 className="font-semibold mb-2">Integration</h4>
							<p className="text-sm text-gray-300">Whop SDK, Webhooks, API Routes</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-16 text-center">
					<p className="text-sm text-gray-500">
						This is a test application for Whop platform integration and development.
					</p>
					<p className="text-xs text-gray-400 mt-2">
						Built with ❤️ using Whop SDK and Next.js
					</p>
				</div>
			</div>
		</div>
	);
}