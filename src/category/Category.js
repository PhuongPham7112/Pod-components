import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import CategoryTab from './CategoryTab';


export default function Category() {
    return(
      <div>
        <div style={{textAlign: 'start', padding: 15}}>
            <Typography variant="h3" color="primary">
              Category
            </Typography>
        </div>
        <CategoryTab/>
      </div>
    );
}