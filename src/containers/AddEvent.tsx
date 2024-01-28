import { useForm } from "react-hook-form";
import { schema } from "../services/yup-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
import { addEvent } from "../services/event-service";
import EventForm from "../components/EventForm";

interface FormData {
  title: string;
  description: string;
  time: string;
}

const AddEvent = () => {
  const { setOpenAddEventModal, year, monthNumber, day } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const date = new Date(Date.UTC(year, monthNumber, day));
    const eventData = { ...data, date, id: null };

    await addEvent(eventData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

      setOpenAddEventModal(false);
  };

  return (
    <div>
      <EventForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddEvent;
