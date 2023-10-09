import { Alert, Container } from '@mui/material'
import React from 'react'

const BuildPage = (viewInfo) => (
    <Container sx={{mt: '20px'}}>
        <Alert sx={{ width: "100%" }} severity="error">{viewInfo}</Alert>
    </Container>
)

export const Card1 = () => BuildPage('Card 1')
export const Card2 = () => BuildPage('Card 2')
