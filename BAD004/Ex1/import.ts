import XLSX from 'xlsx'
import { User, Category, File} from './module'

const workbook = XLSX.readFile('ex_file.xlsx');

const categoryWorkbook = workbook.Sheets["category"]
export const categoryData: Category[] = XLSX.utils.sheet_to_json(categoryWorkbook)

const userWorkbook = workbook.Sheets["user"]
export const userData:User[] = XLSX.utils.sheet_to_json(userWorkbook)

const fileWorkbook = workbook.Sheets["file"]
export const fileData: File[] = XLSX.utils.sheet_to_json(fileWorkbook)

