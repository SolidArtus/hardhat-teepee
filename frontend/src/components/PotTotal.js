import React from "react";
import { ethers } from "ethers";

export function PotTotal({current_amount, withdraw }) {
  return (
    <div class="card">
      <div class="card-header">
        <b>Total Amount in your Pot :</b> ♦{ethers.utils.formatEther(current_amount)}
      </div>
      <div class="card-body">
        <form
          onSubmit={(event) => {
            // This function just calls the transferTokens callback with the
            // form's data.
            event.preventDefault();
            withdraw();
          }}
        >
          <div className="form-group text-center">
            <input className="btn btn-primary" type="submit" value="Withdraw" />
          </div>
        </form>
      </div>
    </div>
  );
}
