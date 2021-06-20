import React from 'react';
import logo from '../img/Logo.svg';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));





const Nav = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="containers">
            <div className="nav">
                <div className="nav_logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav_ul">
                    <li>VIDEO COURSES</li>
                    <li>OUT TEAM</li>
                    <li>NEWS </li>
                    <li>CONTACTS</li>
                    <button className="loging" onClick={handleOpen}   > LOG IN </button>
                </ul>
            </div>

            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 400,
                    }}
                >
                    <Fade in={open}>
                        <div className="modalopen">
                            <div className="modal-login">

                                <div className="modal_header">
                                    <div className="modal-title">
                                        <h2  >Log in </h2>
                                        <i class="fas fa-times mx" onClick={handleClose}></i>
                                    </div>


                                    <input type="text" className="input-l" placeholder="+998 (93) 383-73-13" /><br /><br />
                                    <input type="text" className="input-l" placeholder="Password" /><br />
                                    <div className="login_chak">
                                        <div className="d-flex ">
                                            <input type="checkbox" />
                                            <p className="mx-2">Remember me</p>
                                        </div>
                                        <a href="#">Forget adf password</a>
                                    </div>
                                    <button className="login-btn" >log in</button>
                                </div>

                                <div className=" modal-footera">
                                    <p className="text-center m-3">Don’t have an account?</p>
                                    <button className="login-btn-sing" >Sing in</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>

        </div>
    );
};


export default Nav;

// <div>
//                 <Modal
//                     isOpen={modalIsOpen}

//                     style={customStyles}
//                     contentLabel="Example Modal" >

//                     <div className="modal-login">
//                         <div className="modal-title">
//                             <h2  >Log in </h2>
//                             <i class="fas fa-times mx" onClick={closeModal}></i>
//                         </div>

//                         <form>
//                             <input type="text" className="input-l"  placeholder="+998 (93) 383-73-13" /><br /><br />
//                             <input type="text" className="input-l" placeholder="Password" /><br />
//                             <div className="login_chak">  
//                                 <div className="d-flex ">
//                                     <input  type="checkbox" />
//                                     <p className="mx-2">Remember me</p>
//                                 </div>
//                                 <a href="#">Forget password</a>
//                             </div>
//                             <button className="login-btn btn btn-secondary  " >log in</button>
//                             <div className=" modal-footera">
//                                 <p className="text-center m-3">Don’t have an account?</p>
//                                 <button className="login-btn-sing" >Sing in</button>
//                             </div>
//                         </form>

//                     </div>
//                 </Modal>
//             </div>