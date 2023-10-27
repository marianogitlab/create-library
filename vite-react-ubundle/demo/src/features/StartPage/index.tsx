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
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet.
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
                            Lorem ipsum dolor sit amlet,  amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
                        </p>
                        <p>
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
                            Lorem ipsum dolor sit amlet,  amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum doloramlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum doloramlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
                        </p>
                        <p>
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet.
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
                        </p>
                        <p>
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet.
                            Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit .
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