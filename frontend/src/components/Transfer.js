import React from "react";

export function Transfer({ transferTokens, get_name }) {
  return (
    <div class="card">
      <div class="card-header">
        <b>Transfer</b>
      </div>
      <div class="card-body">
        <form
          onSubmit={(event) => {
            // This function just calls the transferTokens callback with the
            // form's data.
            event.preventDefault();
            const formData = new FormData(event.target);
            const to = formData.get("to");

            if (event.nativeEvent.submitter.value === "Verify"){
              get_name(to);
            }

            const amount = formData.get("amount");

            if (to && amount) {
              transferTokens(to, amount);
            }
          }}
        >
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              step=".00001"
              name="amount"
              placeholder="ETH amount"
            />
          </div>
          <div className="form-group">
            <div className="input-group">
              <input className="form-control" type="text" name="to" placeholder="Recipient amount" required />
              <input className=" btn-primary btn" type="submit" value="Verify" />
            </div>
          </div>
          <div className="form-group text-center">
            <input className="btn btn-primary" type="submit" value="Transfer" />
          </div>
        </form>
      </div>
    </div>
  );
}
