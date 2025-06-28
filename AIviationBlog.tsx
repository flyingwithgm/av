import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

const features = [ "Technical articles on AI in aviation", "Interactive demonstrations", "Case studies of current implementations", "Future trend analysis", ];

export default function AIAviationBlog() { return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 p-8"> <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} > <h1 className="text-4xl font-bold mb-4">AI + Aviation Blog</h1> <p className="text-lg mb-6"> An educational resource explaining artificial intelligence concepts through the lens of aviation applications, making technical topics accessible. </p> </motion.div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-10">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hover:shadow-lg transition duration-300"
      >
        <Card className="rounded-2xl border-blue-200 bg-white">
          <CardContent className="p-6 text-center text-blue-800 font-medium">
            {feature}
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>

  <motion.div
    className="mt-12 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl shadow">
      Explore Blog
    </Button>
  </motion.div>
</div>

); }

