import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type StateProps = {
    isDialogOpen: boolean,
    isImageViewOpen: boolean,
    imageUrl: string,
    dialog: {
        message: string,
        type: "like" | "mail",
    }
}


const initialState: StateProps = {
    isDialogOpen: false,
    isImageViewOpen: false,
    imageUrl: "",
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
        },
        toggleImageView: (state, action: PayloadAction<{
            url: string
        } | undefined>) => {

            if (action.payload) {
                state.imageUrl = action.payload.url;
                state.isImageViewOpen = true;
                return;
            }

            state.isImageViewOpen = false;
        }
    }
});

export const { toggleDialog, toggleImageView, } = slice.actions;
export default slice.reducer;