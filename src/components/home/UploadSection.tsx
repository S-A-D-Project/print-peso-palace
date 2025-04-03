
import { Upload, FileImage, FileText, FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UploadSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Upload Your Design Files
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to print your design? Upload your files and we'll take care of the rest. We accept PDF, JPG, PNG, AI, and PSD formats.
              </p>
              
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center justify-center text-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop your files here or
                  </p>
                  <Button 
                    className="bg-shop-primary hover:bg-shop-secondary"
                  >
                    Browse Files
                  </Button>
                  <p className="text-xs text-gray-500 mt-3">
                    Maximum file size: 25MB
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 flex items-center gap-1 mb-6">
                <span>Need design help?</span>
                <a href="/services/design" className="text-shop-primary font-medium hover:underline">
                  Check our design services
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-shop-primary to-shop-secondary text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6">
                Accepted File Formats
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <FileImage className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Image Files</h4>
                    <p className="text-sm text-white/80">JPG, PNG, TIFF</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Document Files</h4>
                    <p className="text-sm text-white/80">PDF, DOCX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <FilePlus className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Design Files</h4>
                    <p className="text-sm text-white/80">AI, PSD, INDD, EPS</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• 300 DPI minimum resolution for high quality</li>
                  <li>• CMYK color mode for accurate printing</li>
                  <li>• Include 3mm bleed for edge-to-edge printing</li>
                  <li>• Convert text to outlines/paths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
