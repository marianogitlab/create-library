import { Box, Divider } from "@mui/material";
import React from "react";

export const Card: React.FC<{ children: React.ReactNode, actions: any }> = ({ children, actions }) => {

    return (
        <Box
            sx={{
                textAlign: 'left',
                width: '100%',
                backgroundColor: "#FFFFFF",
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid #eee',
                gap: 2
            }}
        >
            <Box
                sx={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    flexGrow: '1'
                }}
            >
                {children}
            </Box>
            <Box sx={{ width: '48px', backgroundColor: '#F2F5F8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end', p: 1 }}>
                <Divider sx={{ border: '1px thin #0090D1', width: '100%' }} />
                {actions}
            </Box>
        </Box>
    );
}