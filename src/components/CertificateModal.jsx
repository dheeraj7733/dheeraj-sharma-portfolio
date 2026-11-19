import { motion, AnimatePresence } from "motion/react";
import { X, Award } from "lucide-react";

export default function CertificateModal({ selectedCert, onClose }) {
  return (
    <AnimatePresence>
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden border border-white/15 bg-[#070c1d] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-[#d4a359]" />
                <h3 className="font-editorial text-lg font-semibold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="border border-white/15 bg-white/5 p-1.5 text-slate-300 transition hover:border-[#d4a359] hover:text-white"
                aria-label="Close Preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex max-h-[75vh] items-center justify-center overflow-auto bg-[#040712] p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto object-contain shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}