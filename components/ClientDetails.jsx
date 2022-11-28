import { memo } from 'react';
import { Divider, Box, CardContent, Card, Typography} from "@mui/material";

function ClientDetails({ client }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" align="center">Client Details</Typography>
                {client.nationality && (
                    <Box>
                        <Divider textAlign="left" >
                            <Typography variant="subtitle2">Nationality</Typography>
                        </Divider>
                        <Typography variant="body1">{client.nationality}</Typography>
                    </Box>
                )}
                {client.quote && (
                    <Box>
                        <Divider textAlign="left" >
                            <Typography variant="subtitle2">Quote</Typography>
                        </Divider>
                        <Typography variant="body1" component="aside">{client.quote}</Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default memo(ClientDetails);
