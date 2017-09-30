import { SelectedRecipeIdAction, SelectedRecipeIdActionTypes } from './selected-recipe-id.actions';
export function selectedRecipeIdReducer(
    state: string = null,
    action: SelectedRecipeIdAction
): string {
    switch (action.type) {
        case SelectedRecipeIdActionTypes.SET:
            return action.payload;
        default:
            return state;
    }
}
