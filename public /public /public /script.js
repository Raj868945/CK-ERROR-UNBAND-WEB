async function unban(){
  const num = document.getElementById("number").value;
  if(!num){ alert("Enter number first"); return; }

  const res = await fetch("/api/unban");
  const data = await res.json();

  const mailto =
    mailto:${data.to} +
    ?subject=${encodeURIComponent(data.subject)} +
    &body=${encodeURIComponent(data.body + "\n\nNumber: " + num)};

  window.location.href = mailto;
}
