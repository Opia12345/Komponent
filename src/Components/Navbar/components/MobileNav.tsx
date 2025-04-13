import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MobileNavProps {
  navLinks: { id: number; name: string; path: string; active: boolean }[];
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const slideVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const MobileNav: React.FC<MobileNavProps> = ({
  navLinks,
  setMobileNav,
  isVisible,
}) => {
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={() => setMobileNav(false)}
          className="fixed top-0 right-0 w-full h-screen bg-black/60 backdrop-blur-md z-[9999] flex justify-end"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-4/5 max-w-sm h-full bg-white p-6 flex flex-col justify-start gap-6 shadow-lg"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => setMobileNav(false)}
                className="text-gray-800 text-2xl cursor-pointer hover:text-gray-600 transition-colors"
              />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((navLink, index) => (
                <motion.div
                  key={navLink.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <NavLink
                    to={navLink.path}
                    onClick={() => setMobileNav(false)}
                    className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors"
                  >
                    {navLink.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-base py-2 rounded-md transition-all">
                Login
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 text-base py-2 rounded-md transition-all">
                Register
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
