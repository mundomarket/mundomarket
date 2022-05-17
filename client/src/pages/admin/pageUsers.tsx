
import { useState, useEffect } from 'react';
import { DashboardOutlined, GroupOutlined, PeopleOutline } from '@mui/icons-material'
import useSWR from 'swr';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid, Select, MenuItem, Box } from '@mui/material';

//import { AdminLayout } from '../../components/layouts'
import { IUser } from './interfaceUsers';
//import { tesloApi } from '../../api';

import { useDispatch, useSelector } from 'react-redux';
import {GETUSERS, GETORDERS,GETPRODUCTS} from '../../actions'
import { AppDispatch,RootState } from '../../store/index'
import { AdminLayout } from './AdminLayout';



const useAppDispatch = () => useDispatch<AppDispatch>();

const UsersPage = () => {

    const usuarios=useSelector((State:RootState) => State.rootReducer.usuarios);

    const dispatch=useAppDispatch()

    useEffect(()=>{
      dispatch(GETUSERS())
    },[dispatch])




    const { data, error } = useSWR<IUser[]>('/api/users');
    const [ users, setUsers ] = useState<IUser[]>([]);


    useEffect(() => {
      if (data) {
          setUsers(data);
      }
    }, [data])
    

    if ( !data && !error ) return (<></>);

    const onRoleUpdated = async( userId: string, newRole: string ) => {

        const previosUsers = users.map( user => ({ ...user }));
        const updatedUsers = users.map( user => ({
            ...user,
            role: userId === user._id ? newRole : user.role
        }));

        setUsers(updatedUsers);
/*
        try {
            
            await tesloApi.put('/admin/users', {  userId, role: newRole });

        } catch (error) {
            setUsers( previosUsers );
            console.log(error);
            alert('No se pudo actualizar el role del usuario');
                }
*/
    }


    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Nombre completo', width: 300 },
        { field: 'email', headerName: 'Correo', width: 250 },
       // { field: 'products', headerName: 'Publicaciones', width: 250 },
        {
            field: 'role', 
            headerName: 'Rol', 
            width: 300,
            renderCell: ({row}: GridValueGetterParams) => {
                return (
                    <Select
                        defaultValue={row.roles}
                        value={ row.roles }
                        label="Rol"
                        onChange={ ({ target }) => onRoleUpdated( row.id, target.value ) }
                        sx={{ width: '300px' }}
                    >
                        <MenuItem value='admin'> Admin </MenuItem>
                        <MenuItem value='user'> Client </MenuItem>
                    </Select>
                )
            }
        },
        {
            field: 'status', 
            headerName: 'Estado', 
            width: 300,
            renderCell: ({row}: GridValueGetterParams) => {
                return (
                    <Select
                        value={ row.roles }
                        label="Rol"
                        onChange={ ({ target }) => onRoleUpdated( row.id, target.value ) }
                        sx={{ width: '300px' }}
                    >
                        <MenuItem value='online'> online </MenuItem>
                        <MenuItem value='bloqueado'> bloqueado </MenuItem>
                    </Select>
                )
            }
        },
    ];

    const rows = usuarios.map( (user:any) => ({
        id: user._id,
        email: user.email,
       // products: user.product.length,
        name: user.name,
        roles: user.role
    }))


  return (
    <Box >

        <AdminLayout
        title='Listado de clientes'
        subTitle=''
        icon={ <GroupOutlined /> }
        >
        <Grid container className='fadeIn'>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>

        </AdminLayout>
    </Box>
  )
}

export default UsersPage