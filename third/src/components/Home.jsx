//home
import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back,</p>
                <p className="text-lg font-semibold text-gray-900">
                  {user?.name}
                </p>
              </div>
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.name?.charAt(0)?.toUpperCase()}
                </span>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Your Dashboard!
            </h2>
            <p className="text-gray-600 text-lg">
              Hello{" "}
              <span className="font-semibold text-blue-600">{user?.name}</span>,
              we're glad to have you back!
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Projects
                </p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              {
                action: "Completed project",
                name: "Website Redesign",
                time: "2 hours ago",
                color: "green",
              },
              {
                action: "Started working on",
                name: "Mobile App",
                time: "4 hours ago",
                color: "blue",
              },
              {
                action: "Updated",
                name: "Dashboard UI",
                time: "6 hours ago",
                color: "purple",
              },
              {
                action: "Reviewed",
                name: "Code changes",
                time: "1 day ago",
                color: "orange",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className={`h-3 w-3 rounded-full bg-${item.color}-500 mr-4`}
                ></div>
                <div className="flex-1">
                  <p className="text-gray-900">
                    {item.action}{" "}
                    <span className="font-semibold">{item.name}</span>
                  </p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Profile Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <p className="text-lg text-gray-900 bg-gray-50 p-3 rounded-lg">
                {user?.name}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <p className="text-lg text-gray-900 bg-gray-50 p-3 rounded-lg">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
