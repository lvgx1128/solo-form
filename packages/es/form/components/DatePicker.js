import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
// import generatePicker from 'antd/es/date-picker/generatePicker'
import 'dayjs/locale/zh-cn';
import 'antd/es/date-picker/style/index';
export default _DatePicker.generatePicker(dayjsGenerateConfig);