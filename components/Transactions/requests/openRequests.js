import React, { useState } from "react";

import {
    TransactionsWrapper,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescripyionCell,
    FileIcon,
} from "./requests.styles";
import TheLink from "@/components/TheLink";

const OpenRequests = () => {
    return (
          <TransactionsWrapper>
            <TableContainer>
                <TBodyContainer>
                    <TableRow>
                        <TableHeader>S/N</TableHeader>
                        <TableHeader>PROJECT NAME</TableHeader>
                        <TableHeader>PROJECT DESCRIPTION</TableHeader>
                        <TableHeader>PROJECT OWNER</TableHeader>
                        <TableHeader>SERVICE HIRE</TableHeader>
                        <TableHeader>DATE Open</TableHeader>
                    </TableRow>

                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>White Sand</TableCell>
                        <DescripyionCell>The project is about  making music and collab with the people and every</DescripyionCell>
                        <TableCell>James Arthur</TableCell>
                        <TableCell>Songwriting</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    
                </TBodyContainer>
            </TableContainer>
         </TransactionsWrapper> 
    );
  };
  
  export default OpenRequests;
