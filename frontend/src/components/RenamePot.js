import React from "react";

export function RenamePot({current_name, renamePot }) {
  return (
    <div class="card">
        <div class="card-header">
            Rename your Pot
        </div>
        <div class="card-body">
            <p class="card-text"><b>Current Name :</b> {current_name || "Pas de nom"}</p>
            <form
                onSubmit={(event) => {
                // This function just calls the transferTokens callback with the
                // form's data.
                event.preventDefault();

                const formData = new FormData(event.target);
                const name = formData.get("name");

                if (name) {
                    renamePot(name);
                }
                }}
            >
                <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Pot Name"
                    required
                />
                </div>
                <div className="form-group text-center">
                    <input className="btn btn-primary" type="submit" value="Rename" />
                </div>
            </form>
          </div>
    </div>
  );
}
