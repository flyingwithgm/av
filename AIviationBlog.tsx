"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function AIviationBlog() {
  return (
    <motion.section
      className="px-6 py-10 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-900 dark:text-white">
        ✈️ AI + Aviation Blog
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        An educational resource explaining artificial intelligence concepts
        through the lens of aviation applications, making technical topics
        accessible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature cards */}
        {[
          {
            title: "Technical Articles",
            desc: "In-depth writeups on AI in avionics, ATC, route planning, and more.",
          },
          {
            title: "Interactive Demos",
            desc: "Engage with simulations that show AI decisions in flight systems.",
          },
          {
            title: "Case Studies",
            desc: "Explore real-world airline AI applications like maintenance prediction.",
          },
          {
            title: "Future Trends",
            desc: "Stay ahead with insights on upcoming AI integrations in aviation.",
          },
        ].map((item, idx) => (
          <Card key={idx} className="hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech stack section */}
      <div className="text-center mt-10">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300">
          Built With:
        </h4>
        <div className="flex justify-center flex-wrap gap-3">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Markdown</Badge>
          <Badge variant="secondary">Python</Badge>
        </div>
        <Button className="mt-6 text-lg px-6 py-3" variant="default">
          🚀 Explore Blog
        </Button>
      </div>
    </motion.section>
  );
}
