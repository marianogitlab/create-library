import { Container, Grid, Icon, Typography } from "@mui/material";
import { version, name } from "../../../package.json";
import { Card } from "__REPLACE__";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { StyledPageTitle, StyledThinPageTitle } from "../../components/StyledPageTitle";

export const HomePage = () => {

    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}
        >
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <StyledPageTitle>
                        __REPLACE__
                    </StyledPageTitle>
                    <StyledThinPageTitle>
                        version: {version}
                    </StyledThinPageTitle>
                </Grid>
                <Grid xs={12} item>
                    <Typography variant="h5" component="div" sx={{ fontSize: "1rem", color: '#5A6872', lineHeight: "1.5rem", fontFamily: 'Roboto', textAlign: 'left' }}>
                        Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sit
                        <br />
                        Lorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sitLorem ipsum dolor sit amlet, sit
                    </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={6} item>
                    <Card
                        actions={(
                            <Icon
                                onClick={() => navigate("/start")}
                                sx={{
                                    cursor: 'pointer',
                                    color: "#0090D1",
                                    textAlign: "center",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: 1
                                }}
                            >
                                <AiOutlineArrowRight />
                            </Icon>
                        )}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontSize: "24px",
                                color: "#005075",
                                letterSpacing: "0",
                                lineHeight: "24px",
                                fontFamily: "Cairo SemiBold",
                                fontWeight: 600,
                                textAlign: "left",
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <Icon>
                                <FaConnectdevelop />
                            </Icon>
                            <span>
                                __REPLACE__
                            </span>
                        </Typography>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                ml: "32px",
                                fontSize: "14px",
                                color: "#9DA6AD",
                                letterSpacing: "0",
                                lineHeight: "24px",
                                fontFamily: "Roboto",
                                fontWeight: 400,
                                textAlign: "left",
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            Vapor Design System - Core Library for React Applications
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}