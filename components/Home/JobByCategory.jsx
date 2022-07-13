import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';

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
                                return <AnchorLink key={index} href='' sx={{
                                    backgroundColor: '#f4f5f6', px: 2, py: 1.5, borderRadius: '8px', color: '#29293d', fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', textDecoration: 'none', fontWeight: 500, border: '1px solid transparent', "&:hover": {
                                        border: '1px solid #0e54ff', backgroundColor: '#f1f5ff'
                                    }, display: "flex", justifyContent: 'center', alignItems: 'center', mr: 1, mt: 2
                                }} >
                                    <img src={category.imgURL} style={{ width: '20px', height: '20px', objectFit: 'contain', marginRight: '8px', marginBottom: '2px' }} alt="icon" />
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
        PageURL: '', imgURL: '/pictures/home/finance.png',
        Name: 'Accounting & Finance'
    },
    {
        PageURL: '', imgURL: '/pictures/home/animal-care.png',
        Name: 'Animal Care'
    },
    {
        PageURL: '', imgURL: '/pictures/home/artDesign.png',
        Name: 'Art, Media, Design'
    },
    {
        PageURL: '', imgURL: '/pictures/home/bar.png',
        Name: 'Bar Staff'
    },
    {
        PageURL: '', imgURL: '/pictures/home/barista.png',
        Name: 'Barista'
    },
    {
        PageURL: '', imgURL: '/pictures/home/cook.png',
        Name: 'Chef & Cook'
    },
    {
        PageURL: '', imgURL: '/pictures/home/child care.png',
        Name: 'Child Care'
    },
    {
        PageURL: '', imgURL: '/pictures/home/cleaning.png',
        Name: 'Cleaning'
    },
    {
        PageURL: '', imgURL: '/pictures/home/construction.png',
        Name: 'Construction & Trades'
    },

    {
        PageURL: '', imgURL: '/pictures/home/customer.png',
        Name: 'Customer Service'
    },

    {
        PageURL: '', imgURL: '/pictures/home/delivery.png',
        Name: 'Driver & Delivery'
    },
    {
        PageURL: '', imgURL: '/pictures/home/education.png',
        Name: 'Education'
    },
    {
        PageURL: '', imgURL: '/pictures/home/engineering.png',
        Name: 'Engineering'
    },
    {
        PageURL: '', imgURL: '/pictures/home/entertainment.png',
        Name: 'Entertainment'
    },
    {
        PageURL: '', imgURL: '/pictures/home/events.png',
        Name: 'Events & Promotion'
    },
    {
        PageURL: '', imgURL: '/pictures/home/healthcare.png',
        Name: 'Healthcare'
    },

    {
        PageURL: '', imgURL: '/pictures/home/host.png',
        Name: 'Host & Hostess'
    },
    {
        PageURL: '', imgURL: '/pictures/home/information.png',
        Name: 'Information Technology'
    },
    {
        PageURL: '', imgURL: '/pictures/home/kitchen.png',
        Name: 'Kitchen Porter'
    },
    {
        PageURL: '', imgURL: '/pictures/home/legal.png',
        Name: 'Legal'
    },
    {
        PageURL: '', imgURL: '/pictures/home/management.png',
        Name: 'Management'
    },
    {
        PageURL: '', imgURL: '/pictures/home/manufacturing.png',
        Name: 'Manufacturing'
    },
    {
        PageURL: '', imgURL: '/pictures/home/office.png',
        Name: 'Office & Admin'
    },
    {
        PageURL: '', imgURL: '/pictures/home/online jobs.png',
        Name: 'Online Jobs'
    },
    {
        PageURL: '', imgURL: '/pictures/home/retail.png',
        Name: 'Retail'
    },
    {
        PageURL: '', imgURL: '/pictures/home/sales.png',
        Name: 'Sales & Marketing'
    },
    {
        PageURL: '', imgURL: '/pictures/home/salon.png',
        Name: 'Salon & Beauty'
    },
    {
        PageURL: '', imgURL: '/pictures/home/science.png',
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