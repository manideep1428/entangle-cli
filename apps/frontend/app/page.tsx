"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const handleGetStarted = () => {
    // TODO: Implement Clerk authentication
    console.log("Redirecting to sign-in...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-indigo-950 to-zinc-900">
      {/* Top Bar */}
      <nav className="fixed w-full backdrop-blur-md bg-black/20 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Terminal className="h-6 w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Entangle CLI
              </span>
            </div>
          <div className="flex gap-4">
          <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25"
            >
              <SignInButton/>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25"
            >
              <SignUpButton/>
            </Button>
          </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent sm:text-6xl"
            >
              Automate Your Workflow with Entangle CLI
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 space-y-8 text-lg text-zinc-300"
            >
              <p className="bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Entangle CLI is your command-line companion for modern development workflows. 
                Built for developers who value efficiency and automation, it streamlines your 
                development process from start to finish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    Automated Workflows
                  </h3>
                  <p className="text-sm text-zinc-300">Create and manage automated workflows with simple commands</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-sm border border-pink-500/20">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Smart Integration
                  </h3>
                  <p className="text-sm text-zinc-300">Seamlessly integrate with your existing development tools</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Real-time Monitoring
                  </h3>
                  <p className="text-sm text-zinc-300">Monitor your workflows and get instant feedback</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-transparent via-black/50 to-black/80 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                About Entangle
              </h3>
              <p className="text-zinc-300">Empowering developers with automated workflows and efficient development tools.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">Tutorials</a>
                </li>
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-zinc-300 hover:text-white transition-colors">Discord</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-zinc-400">&copy; {new Date().getFullYear()} Entangle CLI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}