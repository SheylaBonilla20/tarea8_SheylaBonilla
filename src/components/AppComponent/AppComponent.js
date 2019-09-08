import React, { Component } from 'react'
import styles from './AppComponent.scss';
import FileSelectorComponent from '../FileSelectorComponent/FileSelectorComponent';
import ImageComponent from '../ImageComponent/ImageComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import ToastComponent from '../ToastComponent/ToastComponent';

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            loading: false
        }
        this.handleFileOnChange = this.handleFileOnChange.bind(this);
        this.handleOnEndCalculation = this.handleOnEndCalculation.bind(this);
        this.handleOnStartCalculation = this.handleOnStartCalculation.bind(this);
    }

    handleFileOnChange(e) {
        let img = new Image();
        if (e.target.files.length == 1) {
            img.src = URL.createObjectURL(e.target.files[0]); // seleccionamos el primero del array de ficheros seleccionados
            img.onload = () => {
                console.log("lectura finalizada");
                this.setState({
                    image: img,
                    loading: true //indicamos que vamos a iniciar la lectura de todos los bytes de la imagen
                });
            };
        }
    }

    handleOnEndCalculation() {
        this.setState({
            loading: false
        });
    }

    handleOnStartCalculation() {
        this.setState({
            loading: true
        });
    }

    render() {
        return ( 
           <div role="alert" aria-live="assertive" aria-atomic="true" className={"toast "+styles.toast} data-autohide="true">
            <div className="toast-body">
                Color en hexadecimal copiado al portapapeles.
            </div>
        </div>   
        )
    }
}

export default AppComponent;