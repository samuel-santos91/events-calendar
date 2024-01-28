import { useContext } from "react";
import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

interface FormData {
  title: string;
  description: string;
  time: string;
}

interface EventFormProps {
  onSubmit: SubmitHandler<FormData>;
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  errors: FieldErrors<FormData>;
}

const EventForm: React.FC<EventFormProps> = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
}) => {
  const { setOpenAddEventModal, setOpenEditEventModal } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  return (
    <section className="w-[30rem] h-[30rem] p-4 rounded-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-scroll">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center mb-3">
          <label className="font-bold text-sm" htmlFor="title">
            Title
          </label>
          {errors.title && (
            <p className="text-red-500 text-xs font-bold mb-1">
              {errors.title.message}
            </p>
          )}
          <input
            className="h-9 w-56 border-2 border-black rounded-md indent-2"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>

        <div className="flex flex-col items-center mb-3">
          <label className="font-bold text-sm" htmlFor="description">
            Description
          </label>
          {errors.description && (
            <p className="text-red-500 text-xs font-bold mb-1">
              {errors.description.message}
            </p>
          )}
          <textarea
            className="h-9 w-56 border-2 border-black rounded-md indent-2"
            id="description"
            maxLength={100}
            {...register("description")}
          />
        </div>

        <div className="flex flex-col items-center mb-3">
          <label className="font-bold text-sm" htmlFor="time">
            Time
          </label>
          {errors.time && (
            <p className="text-red-500 text-xs font-bold mb-1">
              {errors.time.message}
            </p>
          )}
          <input
            className="h-9 w-56 border-2 border-black rounded-md indent-2"
            type="time"
            id="time"
            {...register("time")}
          />
        </div>

        <div className="flex justify-center my-6">
          <button
            type="submit"
            className="m-2 p-3 w-28 rounded-md bg-blue-700 text-white"
          >
            Save
          </button>
          <button
            onClick={() => {
              setOpenEditEventModal(false);
              setOpenAddEventModal(false);
            }}
            className="m-2 p-3 w-28 rounded-md bg-slate-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default EventForm;
