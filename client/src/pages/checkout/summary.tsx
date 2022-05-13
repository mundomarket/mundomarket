import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { PayPalButtons } from "@paypal/react-paypal-js";

//import NextLink from 'next/link'
import { CartList, OrderSummary } from "../../components/cart";
import NavBar from "../../components/NavBar/NavBar";

//import { ShopLayout } from '../../components/layouts';

const SummaryPage = () => {
  return (
    //<ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'} imageFullUrl={undefined}>
    <>
      <NavBar />
      <Typography variant="h1" component="h1" sx={{ mt: 8 }}>
        {" "}
        Resumen de la orden
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable={false} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  {" "}
                  Dirección de entrega
                </Typography>

                <Link to="/home">Editar</Link>
              </Box>

              <Typography>Gabriel Goliger</Typography>
              <Typography>Rambla gandhi 359</Typography>
              <Typography>Montevideo Uruguay</Typography>
              <Typography>099944268</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <Link to="/home">Editar</Link>
              </Box>

              <OrderSummary />
                <PayPalButtons
                  createOrder={(data: any, actions: any) => {
                    return actions.order.create({
                      prchase_units: [
                        {
                          amo: {
                            value: "1.99",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data: any, actions: any) => {
                    return actions.order!.capture().then((details: any) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                />

              <Box sx={{ mt: 3 }}>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
    // </ShopLayout>
  );
};

export default SummaryPage;
