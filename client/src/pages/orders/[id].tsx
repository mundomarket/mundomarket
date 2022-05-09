import {
  Box,
  
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
  Chip,
} from "@mui/material";
import { CartList, OrderSumary } from "../../components/cart";
import {  PayPalButtons } from "@paypal/react-paypal-js";
//import NextLink from 'next/link'

//import { ShopLayout } from '../../components/layouts';
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        {" "}
        Orden: 0516168
      </Typography>

      {/*<Chip
                sx={{my:2}}
                label="pendiente de pago"
                variant='outlined'
                color="error"
                icon={ <CreditCardOffOutlined/>}
            />*/}

      <Chip
        sx={{ my: 2 }}
        label="La orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

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

                <Link underline="always">Editar</Link>
              </Box>

              <Typography>Gabriel Goliger</Typography>
              <Typography>Rambla gandhi 359</Typography>
              <Typography>Montevideo Uruguay</Typography>
              <Typography>099944268</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <Link underline="always">Editar</Link>
              </Box>

              <OrderSumary />

              <Box sx={{ mt: 3 }}>
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
                <Chip
                  sx={{ my: 2 }}
                  label="La orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderPage;
