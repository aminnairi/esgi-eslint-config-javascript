"use strict";

const fibonacci = ( value ) => {
    if (value <= 0) {
      return 0;
    }

    if (value === 1) {
      return value;
    }

    return fibonacci( value - 1 )  +  fibonacci( value - 2 );
};

fibonacci( 12 );
