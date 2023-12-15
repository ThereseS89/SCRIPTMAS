let elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

let countElf = 0

function duplicateElf(){

	countElf++
	const clonedElf = elf.cloneNode(true);
	clonedElf.id = 'elf' + countElf
	elf.parentNode.appendChild(clonedElf)
}
