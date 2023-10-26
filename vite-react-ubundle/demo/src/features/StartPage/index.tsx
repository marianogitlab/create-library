import { Box, Container, Grid, Tooltip } from "@mui/material";
import { StyledPageTitle, StyledThinPageTitle } from "../../components/StyledPageTitle";
import { colors } from "../../constants/palette";
import React from "react";

interface Color {
    hex: string;
    name: string;
}

const ColorBox: React.FC<Color> = (props) => {

    const { hex, name } = props;

    const handleCopyText: React.MouseEventHandler<HTMLDivElement> = (ev) => {

        let text = (ev.target as HTMLDivElement)?.outerText;

        if (text) {

            const copyContent = async () => {

                try {
                    const type = "text/plain";
                    var blob = new Blob([text], { type });
                    const data = [new ClipboardItem({ [type]: blob })];
                    await navigator.clipboard.write(data);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            }

            copyContent();
        } else {

            console.warn('Invalid text!');
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: 2, width: 'max-content' }}>
            <Box sx={{ border: '1px solid #eee', height: '64px', width: '96px', backgroundColor: hex }} />
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
                    {name}
                </Box>
                <Tooltip title="Copy" arrow>
                    <Box
                        onClick={handleCopyText}
                        sx={{
                            ':hover': {
                                opacity: 0.6
                            },
                            fontSize: "1rem",
                            fontWeight: 700,
                            display: "block",
                            overflow: "hidden",
                            maxWidth: "100%",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            cursor: 'pointer'
                        }}
                    >
                        {hex}
                    </Box>
                </Tooltip>
            </Box>
        </Box>
    );
}

export const StartPage = () => {

    return (
        <Container maxWidth="md" >
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <StyledPageTitle>
                        Colors
                    </StyledPageTitle>
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
                    <StyledThinPageTitle>
                        Primary Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.primary.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                    <StyledThinPageTitle>
                        Secondary Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.secondary.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                    <StyledThinPageTitle>
                        Background Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.backgroundColor.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                    <StyledThinPageTitle>
                        Text Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.text.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                    <StyledThinPageTitle>
                        Status Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.statusColor.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                    <StyledThinPageTitle>
                        Accent Colors
                    </StyledThinPageTitle>
                    <Box>
                        {colors.accentColor.map(color =>
                            <ColorBox {...color} key={color.name} />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}