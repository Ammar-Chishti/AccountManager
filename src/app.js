import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(date, type, description, amount) {
    return {date, type, description, amount};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained">Submit</Button>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Type</StyledTableCell>
                            <StyledTableCell align="left">Description</StyledTableCell>
                            <StyledTableCell align="left">Amount</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                            <StyledTableCell><TextField/></StyledTableCell>
                        </StyledTableRow>
                        {rows.map(row => (
                            <StyledTableRow key={row.date}>
                                <StyledTableCell align="left">
                                    {row.date}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.type}</StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="left">{row.amount}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
