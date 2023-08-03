import DisplayNested from "./DisplayNested";
import { useState } from 'react';

export default function Challenge1() {
    const [nestedObjected, setNestedObject] = useState({
        taxi: "a car licensed to transport passengers in return for payment of a fare",
        food: {
          sushi:
            "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
          apple: {
            Honeycrisp:
              "an apple cultivar developed at the MAES Horticultural Research Center",
            Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
          },
        },
        food2: {
            sushi:
              "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
            apple: {
              Honeycrisp:
                "an apple cultivar developed at the MAES Horticultural Research Center",
              Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
            },
          },
      });
    
      return (
        <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
            <h1>Display nested object</h1>
          <DisplayNested nestedObjected={nestedObjected} />
        </div>
      );
}