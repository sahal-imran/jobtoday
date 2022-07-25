import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';
import Image from 'next/image';

function JobByCategory() {

    const [Show_more, Set_Show_more] = useState(false);
    const ShowMore = (is_Show) => {
        if (is_Show) {
            return categories;
        }
        else {
            return categories.slice(0, 12);
        }
    }

    return (
        <>
            <Box sx={{ width: '100%', py: 8, display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant='h2' sx={{ fontSize: '28px', lineHeight: '36px', fontFamily: 'GraphikSemiBold', color: '#29293d' }} >
                        Jobs by categories in Pakistan
                    </Typography>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap', mt: 4 }} >
                        {
                            ShowMore(Show_more).map((category, index) => {
                                return <AnchorLink key={index} href={`/country/${category.Name}`} sx={{
                                    backgroundColor: '#f4f5f6', px: 2, py: 1.5, borderRadius: '8px', color: '#29293d', fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', textDecoration: 'none', fontWeight: 500, border: '1px solid transparent', "&:hover": {
                                        border: '1px solid #0e54ff', backgroundColor: '#f1f5ff'
                                    }, display: "flex", justifyContent: 'center', alignItems: 'center', mr: 1, mt: 2
                                }} >
                                    <Box sx={{ mr: 1, display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                        <Image src={category.imgURL} width={20} height={20} objectFit={'contain'} />
                                    </Box>
                                    {category.Name}
                                </AnchorLink>
                            })
                        }
                        <Button onClick={() => Set_Show_more(true)} variant='contained' sx={{
                            backgroundColor: '#f4f5f6', px: 2, py: 1.5, borderRadius: '8px', color: '#29293d', fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikSemibold', boxShadow: 'none', textDecoration: 'none', fontWeight: 500, border: '1px solid transparent', "&:hover": {
                                border: '1px solid #0e54ff', backgroundColor: '#f1f5ff', boxShadow: 'none',
                            }, display: "flex", justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', mr: 1, mt: 2
                        }} >
                            More <img src="/pictures/home/more.svg" style={{ width: '16px', height: '18px', objectFit: 'cover', marginLeft: '6px' }} alt="icon" />
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default JobByCategory

const categories = [
    {
        PageURL: 'Accounting-&-Finance', imgURL: '/pictures/home/finance.png',
        Name: 'Accounting & Finance'
    },
    {
        PageURL: 'Animal-Care', imgURL: '/pictures/home/animal-care.png',
        Name: 'Animal Care'
    },
    {
        PageURL: 'Art-Media-Design', imgURL: '/pictures/home/artDesign.png',
        Name: 'Art, Media, Design'
    },
    {
        PageURL: 'Bar-Staff', imgURL: '/pictures/home/bar.png',
        Name: 'Bar Staff'
    },
    {
        PageURL: 'Barista', imgURL: '/pictures/home/barista.png',
        Name: 'Barista'
    },
    {
        PageURL: 'Chef-&-Cook', imgURL: '/pictures/home/cook.png',
        Name: 'Chef & Cook'
    },
    {
        PageURL: 'Child-Care', imgURL: '/pictures/home/child care.png',
        Name: 'Child Care'
    },
    {
        PageURL: 'Cleaning', imgURL: '/pictures/home/cleaning.png',
        Name: 'Cleaning'
    },
    {
        PageURL: 'Construction-&-Trades', imgURL: '/pictures/home/construction.png',
        Name: 'Construction & Trades'
    },

    {
        PageURL: 'Customer-Service', imgURL: '/pictures/home/customer.png',
        Name: 'Customer Service'
    },

    {
        PageURL: 'Driver-&-Delivery', imgURL: '/pictures/home/delivery.png',
        Name: 'Driver & Delivery'
    },
    {
        PageURL: 'Education', imgURL: '/pictures/home/education.png',
        Name: 'Education'
    },
    {
        PageURL: 'Engineering', imgURL: '/pictures/home/engineering.png',
        Name: 'Engineering'
    },
    {
        PageURL: '', imgURL: '/pictures/home/entertainment.png',
        Name: 'Entertainment'
    },
    {
        PageURL: 'Events-&-Promotion', imgURL: '/pictures/home/events.png',
        Name: 'Events & Promotion'
    },
    {
        PageURL: 'Healthcare', imgURL: '/pictures/home/healthcare.png',
        Name: 'Healthcare'
    },

    {
        PageURL: 'Host-&-Hostess', imgURL: '/pictures/home/host.png',
        Name: 'Host & Hostess'
    },
    {
        PageURL: 'Information-Technology', imgURL: '/pictures/home/information.png',
        Name: 'Information Technology'
    },
    {
        PageURL: 'Kitchen-Porter', imgURL: '/pictures/home/kitchen.png',
        Name: 'Kitchen Porter'
    },
    {
        PageURL: 'Legal', imgURL: '/pictures/home/legal.png',
        Name: 'Legal'
    },
    {
        PageURL: 'Management', imgURL: '/pictures/home/management.png',
        Name: 'Management'
    },
    {
        PageURL: 'Manufacturing', imgURL: '/pictures/home/manufacturing.png',
        Name: 'Manufacturing'
    },
    {
        PageURL: 'Office-&-Admin', imgURL: '/pictures/home/office.png',
        Name: 'Office & Admin'
    },
    {
        PageURL: 'Online-Jobs', imgURL: '/pictures/home/online jobs.png',
        Name: 'Online Jobs'
    },
    {
        PageURL: 'Retail', imgURL: '/pictures/home/retail.png',
        Name: 'Retail'
    },
    {
        PageURL: 'Sales-&-Marketing', imgURL: '/pictures/home/sales.png',
        Name: 'Sales & Marketing'
    },
    {
        PageURL: 'Salon-&-Beauty', imgURL: '/pictures/home/salon.png',
        Name: 'Salon & Beauty'
    },
    {
        PageURL: 'Science', imgURL: '/pictures/home/science.png',
        Name: 'Science'
    },
    {
        PageURL: '', imgURL: '/pictures/home/security.png',
        Name: 'Security'
    },
    {
        PageURL: '', imgURL: '/pictures/home/sports.png',
        Name: 'Sports & Wellness'
    },
    {
        PageURL: '', imgURL: '/pictures/home/waiters.png',
        Name: 'Waiters'
    },
    {
        PageURL: '', imgURL: '/pictures/home/warehouse.png',
        Name: 'Warehouse'
    },
    {
        PageURL: '', imgURL: '/pictures/home/writting.png',
        Name: 'Writing & Editing'
    }, {
        PageURL: '', imgURL: '/pictures/home/other.png',
        Name: 'Other'
    },
]