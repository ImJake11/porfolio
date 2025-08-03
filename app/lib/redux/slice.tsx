import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type StateProps = {
    isDialogOpen: boolean,
    dialog: {
        message: string,
        type: "like" | "mail",
    }
}


const initialState: StateProps = {
    isDialogOpen: false,
    dialog: {
        type: "like",
        message: "",
    },
}


const slice = createSlice({
    initialState,
    name: "slice",
    reducers: {
        toggleDialog: (state, action: PayloadAction<{ message: string, type: "mail" | "like" } | null>) => {
            if (action.payload) {
                state.dialog.message = action.payload.message;
                state.dialog.type = action.payload.type;
                state.isDialogOpen = true;
            } else {
                state.isDialogOpen = false;
                state.dialog.message = ""
            }
        }
    }
});

export const { toggleDialog } = slice.actions;
export default slice.reducer;