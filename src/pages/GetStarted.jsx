
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 p-8 md:p-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl max-w-xl text-center border border-white/30"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow-md">
          🍽️ Welcome to Foodie Finder
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Discover delicious meals, explore cuisines, and get random inspiration in one click.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => navigate("/home")}
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-full text-lg cursor-pointer"
          >
            🚀 Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
