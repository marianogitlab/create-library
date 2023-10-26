import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import { version } from "../../../package.json";

export const StartPage = () => {

    const colors = {
        primary: [
            {
                hex: '#0090D1',
                name: 'RichElectricBlue'
            },
            {
                hex: '#00C3EA',
                name: 'CyanProgress'
            },
            {
                hex: '#005075',
                name: 'DarkImperialBlue'
            },
            {
                hex: '#C9D9E8',
                name: 'ColumbiaBlue'
            },
        ],
        secondary: [
            {
                hex: '#DEF0F7',
                name: 'Azure'
            },
            {
                hex: '#B9E6F6',
                name: 'Diamond'
            },
        ],
        backgroundColor: [
            {
                hex: '#FFFFFF',
                name: 'White'
            },
            {
                hex: '#F2F5F8',
                name: 'WhiteSmoke'
            },
            {
                hex: '#E4EAF0',
                name: 'AzureishWhite'
            },
        ],
        text: [
            {
                hex: '#FFFFFF',
                name: 'YankeesBlue'
            },
            {
                hex: '#F2F5F8',
                name: 'Cadet'
            },
            {
                hex: '#E4EAF0',
                name: 'QuickSilver'
            },
            {
                hex: '#C1C1C4',
                name: 'SilverSand'
            },
            {
                hex: '#D8D8D9',
                name: 'Gainsboro'
            },
            {
                hex: '#FAFBFD',
                name: 'GhostWhite'
            },
        ],
        statusColor: [
            {
                hex: '#09822A',
                name: 'LaSalleGreen'
            },
            {
                hex: '#FDB927',
                name: 'Crayola'
            },
            {
                hex: '#D82829',
                name: 'MaximumRed'
            },
        ],
        accentColor: [
            {
                hex: '#FC4E3D',
                name: 'OgreOdor'
            },
            {
                hex: '#DA2C38',
                name: 'RustyRed'
            },
            {
                hex: '#711423',
                name: 'Prune'
            },
            {
                hex: '#00AA00',
                name: 'IslamicGreen'
            },
            {
                hex: '#0D6C80',
                name: 'BlueSapphire'
            },
            {
                hex: '#7745EC',
                name: 'MediumSlateBlue'
            },
            {
                hex: '#7745EC',
                name: 'RoyalFuchsia'
            },
            {
                hex: '#753F83',
                name: 'MaximumPurple'
            },
            {
                hex: '#361D5B',
                name: 'RussianViolet'
            },
        ],
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                gap: 2
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Typography variant="h1" component="div" sx={{ fontSize: "3.2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Colors
                    </Typography>
                    <Box sx={{ fontSize: "1rem", color: '#5A6872', lineHeight: "1.5rem", }}>
                        <p>
                            The Vapor color palette is designed and implemented in a themable manner.
                            The universal color variables are determined by common roles and usage; it is not based singularly on a color value (i.e. unique hex code).
                            The same color value may be assigned to multiple variables in a theme’s palette when the values have distinctly different roles.
                        </p>
                        <p>
                            A universal variable can also have multiple associated roles when the color is consistently used across those roles.
                            This allows for uniform color application across themes while giving each theme the freedom to express its own individuality at a more detailed level.
                        </p>
                        <p>
                            Certain UI color combinations on Vapor must pass the new WCAG AA standards of a minimum 3:1 ratio.
                            Vapor complies with a 4.5:1 color ratio for certain controls and all icons. In the table below are approved Vapor color combinations.
                        </p>
                        <p>
                            Other color accessibility concerns include color blindness and low vision users.
                            Learn more about these additional color accessibility guidelines in the accessibility section of the Vapor website.
                        </p>
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Primary Colors
                    </Typography>
                    <Box>
                        {colors.primary.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Secondary Colors
                    </Typography>
                    <Box>
                        {colors.secondary.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Background Colors
                    </Typography>
                    <Box>
                        {colors.backgroundColor.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Text Colors
                    </Typography>
                    <Box>
                        {colors.text.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Status Colors
                    </Typography>
                    <Box>
                        {colors.statusColor.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: "2rem", fontWeight: 700, lineHeight: "4rem", fontFamily: 'Cairo', textAlign: 'left' }}>
                        Accent Colors
                    </Typography>
                    <Box>
                        {colors.accentColor.map(color =>
                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
                                <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: color.hex }} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box
                                        style={{
                                            color: '#005075',
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.name}
                                    </Box>
                                    <Box
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            display: "block",
                                            overflow: "hidden",
                                            maxWidth: "100%",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {color.hex}
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}