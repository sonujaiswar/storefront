
export default function EditLocation() {
  
  return (
    <>

      <ProfileRow
        label={t("basicFormEditGender")}
        value="Female"
        onEdit={() => dispatch(dialogSetKey("EditLocation"))}
        editLabel={t("basicFormEditGenderTitle")}
      />
    </>
  );
}
