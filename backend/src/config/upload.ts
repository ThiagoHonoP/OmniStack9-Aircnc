import multer from "multer";
import path from "node:path";

export const storage: multer.StorageEngine = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads"),
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});
