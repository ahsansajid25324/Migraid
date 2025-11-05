const ConsultationForm = ({ onLoad }) => {
  return (
    <iframe
      className="fieldContWrapper"
      aria-label="Financial Assistance Request Form"
      style={{
        height: "500px",
        width: "99%",
        border: "none",
        borderRadius: "12px",
      }}
      src="https://forms.zohopublic.com/IDEATORSCUP/form/BOOKAFREECONSULTATIONFORM/formperma/oOZxUgP3hdpyRJ_AZYhMxEeoD4Epq7W2wxa__bmcPz4?zf_rszfm=0"
      title="Financial Assistance Request Form"
      onLoad={onLoad}
    ></iframe>
  );
};

export default ConsultationForm;
