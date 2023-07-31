import { Dayjs } from 'dayjs'
import { DatePicker } from 'antd'
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs'
// import generatePicker from 'antd/es/date-picker/generatePicker'
import 'dayjs/locale/zh-cn'
import 'antd/es/date-picker/style/index'

export default DatePicker.generatePicker<Dayjs>(dayjsGenerateConfig) as any
