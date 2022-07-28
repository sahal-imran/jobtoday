import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import usericon from "../../public/pictures/home/usericon.jpg"
import MessageIcon from "../../public/pictures/home/message.svg"
import Tick from "../../public/pictures/home/blackTick.svg";
import QR from "../../public/pictures/home/QR.png"
import Mobilepicture from "../../public/pictures/home/Mobile.png"
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function DialogBox(props) {
    return (
        <>
            {/* ++++++++++++ */}
            {/*    For desktop    */}
            {/* ++++++++++++ */}
            <Dialog
                open={props.open}
                sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}
            >
                <Box sx={{ width: '520px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: 3 }} >
                    {/* ++++++++++ */}
                    {/* Cross icon */}
                    {/* +++++++++++*/}
                    <Box onClick={props.close} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
                        <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
                    </Box>
                    {/* +++++++++++++++ */}
                    {/* Top Profile bar */}
                    {/* +++++++++++++++ */}
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end', pt: 2, py: 3 }} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            {/* User icon */}
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '56px', height: '56px' }} >
                                <Image src={usericon} width={56} height={56} objectFit={'cover'} />
                            </Box>
                            {/* User info */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                    Sahal I.
                                </Typography>
                                <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                    Download the app to edit
                                </Typography>
                            </Box>
                        </Box>
                        <Button variant='text' sx={{
                            px: 2, py: 1, borderRadius: '8px', color: '#0e54ff', fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikMedium', textDecoration: 'none', fontWeight: 500, backgroundColor: 'none', boxShadow: 'unset', "&:hover": {
                                boxShadow: 'unset',
                                backgroundColor: 'unset',
                            }, textTransform: 'unset'
                        }} >
                            Log out
                        </Button>
                    </Box>

                    {/* +++++++++++++ */}
                    {/*   info box    */}
                    {/* +++++++++++++ */}
                    <Box sx={{ py: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderTop: '1px solid #e7ebee', borderBottom: '1px solid #e7ebee' }} >

                        {/* Message box */}
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', }} >
                            {/* Message icon */}
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '30px', height: '30px' }} >
                                <Image src={MessageIcon} width={30} height={30} objectFit={'cover'} />
                            </Box>
                            {/* Message text */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                    Chats
                                </Typography>
                                <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                    Download the app to chat with employers
                                </Typography>
                            </Box>
                        </Box>

                        {/* Application download box */}
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 3 }} >
                            {/* Tick icon */}
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '30px', height: '30px' }} >
                                <Image src={Tick} width={30} height={30} objectFit={'cover'} />
                            </Box>
                            {/* text */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                    Applications
                                </Typography>
                                <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                    Download the app to see the status of your applications
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* +++++++++++++ */}
                    {/*    QR Box     */}
                    {/* +++++++++++++ */}
                    <Box sx={{ py: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Box sx={{ width: '138px', display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
                            <Box sx={{ overflow: 'hidden' }} >
                                <Image src={QR} width={150} height={150} objectFit={'cover'} />
                            </Box>
                        </Box>
                        <Box sx={{ width: 'calc(100% - 138px)', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 3 }} >
                            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '26px', fontFamily: 'GraphikSemibold', letterSpacing: '.5px', color: '#000', textOverflow: 'ellipsis', mb: 1 }} >
                                Download the app
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#000', }} >
                                Scan the QR code to download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                <AnchorLink href='' >
                                    <Image src={'/pictures/home/white-playstore.jpg'} width={127} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                                <AnchorLink href='' sx={{ ml: 2 }} >
                                    <Image src={'/pictures/home/white-appstore.jpg'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Dialog>


            {/* ---------------------------------------------------------------------------   */}



            {/* ++++++++++++++++ */}
            {/*    For Mobile    */}
            {/* ++++++++++++ ++++*/}
            <Dialog
                fullScreen
                open={props.open}
                onClose={props.Close}
                TransitionComponent={Transition}
                sx={{
                    display: {
                        md: 'none',
                        xs: 'block'
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', px: 2 }} >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }} >
                        {/* Cross icon */}
                        <Box onClick={props.close} sx={{ cursor: 'pointer' }} >
                            <Image src={'/pictures/home/cross.svg'} width={24} height={24} objectFit={'objectfit'} />
                        </Box>
                        {/* Logout Button */}
                        <Button variant='text' sx={{
                            px: 2, py: 1, borderRadius: '8px', color: '#0e54ff', fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikMedium', textDecoration: 'none', fontWeight: 500, backgroundColor: 'none', boxShadow: 'unset', "&:hover": {
                                boxShadow: 'unset',
                                backgroundColor: 'unset',
                            }, textTransform: 'unset'
                        }} >
                            Log out
                        </Button>
                    </Box>
                    {/* +++++++++ */}
                    {/*  Top profile bar */}
                    {/* +++++++++ */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'start', mb: 3 }} >
                        {/* User icon */}
                        <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '56px', height: '56px' }} >
                            <Image src={usericon} width={56} height={56} objectFit={'cover'} />
                        </Box>
                        {/* User info */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                            <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                Sahal I.
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                Download the app to edit
                            </Typography>
                        </Box>
                    </Box>

                    {/* +++++++++++++ */}
                    {/*   info box    */}
                    {/* +++++++++++++ */}
                    <Box sx={{ py: 3, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderTop: '1px solid #e7ebee', borderBottom: '1px solid #e7ebee' }} >

                        {/* Message box */}
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', }} >
                            {/* Message icon */}
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '30px', height: '30px' }} >
                                <Image src={MessageIcon} width={30} height={30} objectFit={'cover'} />
                            </Box>
                            {/* Message text */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                    Chats
                                </Typography>
                                <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                    Download the app to chat with employers
                                </Typography>
                            </Box>
                        </Box>

                        {/* Application download box */}
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', mt: 3 }} >
                            {/* Tick icon */}
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: '30px', height: '30px' }} >
                                <Image src={Tick} width={30} height={30} objectFit={'cover'} />
                            </Box>
                            {/* text */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '22px', fontFamily: 'GraphikMedium', color: '#000', textOverflow: 'ellipsis', }} >
                                    Applications
                                </Typography>
                                <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', textOverflow: 'ellipsis', }} >
                                    Download the app to see the status of your applications
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* ++++++++++++++++ */}
                    {/*   Download app   */}
                    {/* ++++++++++++++++ */}
                    <Box sx={{ py: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Box>
                            <Image src={Mobilepicture} width={230} height={150} objectFit={'contain'} />
                        </Box>
                        <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#000', }} >
                            Download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
                        </Typography>
                    </Box>
                    <Button variant='contained' sx={{
                        width:'100%',height:'60px', borderRadius: '8px', color: 'white', fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikMedium', textDecoration: 'none', fontWeight: 500, backgroundColor: '#0e54ff', boxShadow: 'unset', "&:hover": {
                            boxShadow: 'unset',
                            backgroundColor: '#0e54ff'
                        }, textTransform: 'unset',mt:2
                    }} >
                        Download app
                    </Button>
                </Box>
            </Dialog>
        </>
    )
}

export default DialogBox