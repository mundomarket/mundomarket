import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
//import { ShopLayout } from "../../components/layouts"
//import NextLink from 'next/link';
import NavBar from '../../components/ui/NavBar/NavBar'

const columns: GridColDef[]= [
    {field: 'id', headerName: 'ID', width:100},
    {field: 'fullname', headerName: 'Nombre Completo', width:300},

    {
        field:'paid',
        headerName:'Pagada',
        description: 'Muestra si esta pagada la orden o no',
        width: 200,
        renderCell: (params: GridValueGetterParams)=>{
            return (
                params.row.paid
                ? <Chip color="success" label="Pagado" variant="outlined"/>
                :  <Chip color="error" label="No Pagada" variant="outlined" />
            )
            
        }
    },

    {
        field:'orden',
        headerName:'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams)=>{
            return (

                    <Link underline='always'>
                        Ver Orden
                    </Link>

            )
            
        }
    }


];

const rows=[
    {id: 1, paid:true, fullname: 'Gabriel Goliger'},
    {id: 2, paid:false, fullname: 'Jaime Gomez'},
    {id: 3, paid:true, fullname: 'Pepe Goliger'},
    {id: 4, paid:false, fullname: 'Daniel Gonzales'},
    {id: 5, paid:false, fullname: 'Caro Bercolini'},
    {id: 6, paid:true, fullname: 'Ines Beckamp'},
 
]

const HistoryPage= () => {
    return (
        <>
            <NavBar/>
            <Typography variant='h1'> Historial de ordenes</Typography>

            <Grid container>
                <Grid item xs={12} sx = {{height:650, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />

                </Grid>

            </Grid>

            </>

    )
}

export default HistoryPage;