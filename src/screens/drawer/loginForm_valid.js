import * as Yup from "yup";

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const website = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const validationSchema = Yup.object().shape({
    username: Yup.string().max(200, "不能多于200个字符").min(3, "不能少于3个字符").required('Required'),
    password: Yup.string().max(400, "不能多于400个字符").min(3, "不能少于3个字符").required('Required'),

});

export default validationSchema;