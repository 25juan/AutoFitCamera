import React,{ Component } from "react" ;
import Alert,{ RNAlert } from "./Alert" ;
import Picker, {RNPicker} from "./Picker" ;
import Toast,{RNToast } from "./Toast";
import Loading,{ RNLoading } from "./Loading" ;

export let RNDialog = {
    Alert:null,
    Picker:null,
    Toast:null
} ;

export default class extends Component {
    componentDidMount() {
        RNDialog.Alert = require("./Alert").RNAlert ;
        RNDialog.Picker = require("./Picker").RNPicker ;
        RNDialog.Toast = require("./Toast").RNToast ;
        RNDialog.Loading = require("./Loading").RNLoading ;
    }

    render(){
        let { alertProps={},pickerProps={},toastProps={},loadingProps  } = this.props ;
        return (
            <>
            <Alert { ...alertProps } />
            <Picker { ...pickerProps } />
            <Toast { ...toastProps } />
            <Loading { ...loadingProps }/>
        </>
    )
    }
}