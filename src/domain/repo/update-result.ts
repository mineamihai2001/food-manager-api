import { UpdateStatus } from "./update-status.enum";

export type UpdateResult<T> = {
    entity: T;
    status: UpdateStatus;
};
