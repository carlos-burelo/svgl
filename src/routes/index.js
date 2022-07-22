import fs from 'fs'
import path from 'path'

export function GET(){
  const currentPath = process.cwd()
  const svgPath = path.join(currentPath, 'svg')
  const svgFiles = fs.readdirSync(svgPath)
  const svgs = svgFiles.map(file => {
    const filePath = path.join(svgPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return {
      name: file,
      content: fileContent
    }
  })
  return {
    status:200,
    body: {svgs}
  }
}