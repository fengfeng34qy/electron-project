"";Object.defineProperty(exports,"__esModule",{value:!0});var _common=require("../common");exports.default={render:function anonymous(){with(this)return _c("div",{staticClass:"aui-radio-group"},[_t("default")],2)},name:"aui-radio-group",mixins:[_common.Emitter],props:{value:{},size:String,fill:String,textColor:String,disabled:Boolean},watch:{value:function(e){this.$emit("change",e),this.$dispatch("AuiFormItem","aui.form.change",[this.value])}}};