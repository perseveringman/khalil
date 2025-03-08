const fs = require('fs');
const path = require('path');

// 图片文件扩展名
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];

// 要处理的目录
const DIRECTORY = 'assets';

// 执行重命名操作
function renameImages() {
  try {
    // 读取目录中的所有文件
    const files = fs.readdirSync(DIRECTORY);
    
    // 过滤出图片文件
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    
    console.log(`找到 ${imageFiles.length} 个图片文件`);
    
    // 对每个图片文件进行重命名
    imageFiles.forEach((file, index) => {
      const oldPath = path.join(DIRECTORY, file);
      const newPath = path.join(DIRECTORY, `img${index + 1}.jpg`);
      
      fs.renameSync(oldPath, newPath);
      console.log(`已重命名: ${file} -> img${index + 1}.jpg`);
    });
    
    console.log('重命名完成！');
  } catch (error) {
    console.error('发生错误:', error.message);
  }
}

renameImages(); 